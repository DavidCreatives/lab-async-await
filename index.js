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
    data.forEach( element => {
        // Test: Each object within the fetched array
        let bodyContent = element.body
        
        // DOM
        const li = document.createElement('li')
        const h1 = document.createElement('h1')

        // Acquiring the title key-value pair of the element of the fetched array's object
        h1.textContent = element.title
        
        const p = document.createElement('p')

        // Acquiring the body key-value pair of the element of the fetched array's object
        p.textContent = bodyContent
        li.style.whiteSpace = 'pre'

        li.appendChild(h1)
        li.appendChild(p)

        const postDisplay = document.getElementById('post-list')

        postDisplay.appendChild(li)

    });
    }
    catch(error){
        // In the event of an error(response), the error is thrown out onto the console.
        throw new Error(error)
    }

}



// Calling out the asynchronousfunction
displayPosts()