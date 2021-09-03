
   // Spinner use
       const toggleSpinner = displayStyle => {
           document.getElementById('spinner').style.display = displayStyle;
       }
   // spinner end


     // searchbox value and button work
            const searchBook = () => {
                const searchFiled = document.getElementById('search-filed')
                const searchText = searchFiled.value
                if(searchText === ''){
                    const noValuePrint = document.getElementById('no-value')
                        noValuePrint.innerText = 'your search value " " please search book name'
                }
                
                // console.log(searchText)
                searchFiled.value = ''
                toggleSpinner('block')
                const url = `https://openlibrary.org/search.json?q=${searchText}`
                console.log(url)

                fetch(url)
                .then (res => res.json())
                .then (data => displaySearchResult(data))
            }
    // searchbox value and button work end
   


const displaySearchResult = searchItemInfo => {
    const searchResult = document.getElementById("searchResult")
    console.log(searchItemInfo)
    
    // another search Result hide
                searchResult.textContent = ''
    
    //input Search book 
                const books = searchItemInfo.docs

    //search value count
                    const searchValueCount = document.getElementById('search-value-count');
                    searchValueCount.innerText = `Display show ${books.length} Find result ${searchItemInfo.numFound}`
                    console.log(searchItemInfo.numFound)
         //search value count end
    // Search result not matched
                    if(books.length === 0){
                        const noValuePrint = document.getElementById('no-value')
                        noValuePrint.innerText = 'Your search not matched'
                    }
                    else{
                        const noValuePrint = document.getElementById('no-value')
                        noValuePrint.innerText = ''
                    }
    // Search result not matched end

    // Loop vavohar kora sobgulu data pawa
                   books.forEach(book => {
            //Display Result print
                    const div = document.createElement('div')
                    div.classList.add('col-sm-6','col-xl-4','col-lg-4','g-4','mb-4')
                    div.innerHTML = `
                        <div class="card  p-3">
                                <div class="bg-light">
                                        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" height="400px" width="100%" alt="">
                                </div>
                                <div class="mt-3">
                                        <h3 class="card-title">${book.title}</h3>
                                        <p class="card-text">Author: ${book.author_name}</p>
                                        <p class="card-text">Language Name: ${book.language}</p>
                                        <p class="card-footer">Publish Year: ${book.first_publish_year}</p>
                                        
                                </div> 
                            </div>
                        </div>
                    `
                    searchResult.appendChild(div)
                    });
            //Display Result print

            //spinner show
            toggleSpinner('none')
    }

