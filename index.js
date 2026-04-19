// Write your code here!

const body = document.body

// Asynchronous function
async function displayPosts(){
    try{
    // Fecthing the API data of posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    // Acquiring the data from the posts
    // In this case, the data is an array of objects
    let data = await response.json()
    console.log(data)

    //  Creating a loop to go through eacg element with the fetched array converted to json format and usind DOM 
    data.forEach(element => {
        // Test: Each object within the fetched array
        console.log(element)

        // DOM
        const listItem = document.createElement('li')
        const headerOne = document.createElement('h1')

        // Acquiring the title key-value pair of the element of the fetched array's object
        headerOne.textContent = element.title
        const paragraphItem = document.createElement('p')

        // Acquiring the body key-value pair of the element of the fetched array's object
        headerOne.textContent = element.body

        listItem.appendChild(headerOne)
        listItem.appendChild(paragraphItem)

        const unorderedList = document.getElementById('post-list')

        unorderedList.appendChild(listItem)

    });
    }
    catch(error){
        // In the event of an error(response), the error is thrown out onto the console.
        throw new Error(error)
    }

}



// Calling out the asynchronousfunction
displayPosts()