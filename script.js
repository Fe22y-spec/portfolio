const projectsData = {
    project1: {
        title: "editable to do list",
        tech: "Python",
        why: "I wanted to build my own editable to-do list inroder to understand hpw JSON is used in storing data and inroder also to understand the basic structures of python as a langauage and tkinter in frontend development.",
        features: "It enbales the user to input tasks that they are supposed to do, it also give them an option to delete them once they are done with it or to edit incase they have keyed in the incorrect spellings or tasks,once keyed in the tasks are stored and saved as JSON",
        link: "https://github.com/Fe22y-spec/Editable-to-do-list"
    },
    project2: {
        title: "Grocery management system",
        tech: "HTML,CSS,Javascript",
        why: "I wanted to build a grocery management system in order to understand how to use javascript,html and css in frontend development and also to understand the basic structures of javascript as a langauge.",
        features: "It  helps the grocery owner to keep track of the products they have in their shop, the quantity they have in their shop and the price of the product, it also give them an option to delete them once they are done with it or to edit incase they have keyed in the incorrect spellings or products,once keyed in the products are stored and saved; the owner can also view the products that are low in stcok, the net profit they have made and the amount of products they have sold.It also has an order page that enables the owner to order for new products",
        link: "https://fe22y-spec.github.io/grocerystore/"
    },
    project3: {
        title: "Calculator",
        tech: "Python",
        why: "I developed this Python calculator to bridge the gap between syntax and software logic. While the core functionality centers on arithmetic operations, the projects true purpose was to implement robust error handling and input validation—specifically managing edge cases like division by zero and non-numeric inputs. It demonstrates a clean use of modular functions and conditional logic to create a seamless, crash-proof user experience.",
        features: "It enables the user to perform basic arithmetic operations such as addition, subtraction, multiplication and division, it also give them an option to delete them once they are done with it or to edit incase they have keyed in the incorrect spellings or tasks,once keyed in the tasks are stored and saved as JSON",
        link: "https://github.com/Fe22y-spec/calculator-app"
    },

    project4:{
        title: "code to music",
        tech: "Html,css and javascript",
        why: "I wanted to practice HTML, CSS, and JavaScript by building something fun like music which i also like a lot",
        features: "The Code to Music app features real-time playback controls, volume and tempo adjustment, multiple instrument options, a visualizer, and syntax highlighting that turns code into musical notes based on keywords and symbols.",
        link:"https://fe22y-spec.github.io/code-to-music/"


        
    },
};

function openProject(projectId) {
    const data = projectsData[projectId];
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="modal-body-content">
            <h2>${data.title}</h2>
            <p class="tech-stack">${data.tech}</p>
            
            <h3>Why it was made</h3>
            <p>${data.why}</p>
            
            <h3>Key Features</h3>
            <p>${data.features}</p>
            
            <a href="${data.link}" class="action-btn" target="_blank">View Project</a>
        </div>
    `;

    const modal = document.getElementById('project-modal');
    modal.classList.add('active');
}

function closeProject() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeProject();
    }
}
