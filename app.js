/*
function initialize(){
    var html=document.getElementById("html");
    var css=document.getElementById("css");
    var js=document.getElementById("js");
    var code=document.getElementById("code").contentWindow.document;
    document.body.onkeyup=function(){
        code.open();
        code.writeln(
            html.value +

            "<style>"+ css.value +"</style>"

            ,"<script>" + js.value +"</script>"


        );

        code.close();

    }
}

initialize();
*/
/*
const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const outputFrame = document.getElementById('output-frame');
const saveButton = document.getElementById('save-button');

// Function to execute the code
function executeCode() {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}</script>`;

    const code = `${html}${css}${js}`;
    outputFrame.srcdoc = code;
}

// Add a click event listener to the save button
saveButton.addEventListener('click', () => {
    const codeToSave = {
        html: htmlCode.value,
        css: cssCode.value,
        js: jsCode.value
    };

    // Convert the code to a downloadable file (you can use Blob or other methods)
    // Example: https://stackoverflow.com/a/33542499

    // Provide a download link for the user to save the code
});

// Initial execution of code
executeCode();
*/
function initialize() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;
    
    // Function to save the code as a file
    function saveFile(content, fileName, fileType) {
        var blob = new Blob([content], { type: fileType });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
    }

    document.body.onkeyup = function () {
        code.open();
        code.writeln(
            html.value +

            "<style>" + css.value + "</style>" +

            "<script>" + js.value + "</script>"
        );

        code.close();
    }

    // Add a click event listener to the "Save Code" button
    document.getElementById("save-code").addEventListener("click", function () {
        saveFile(html.value, "index.html", "text/html");
        saveFile(css.value, "style.css", "text/css");
        saveFile(js.value, "script.js", "text/javascript");
    });
}


// Function to handle file input change event
function handleFileInput(inputElement, codeEditor) {
    const file = inputElement.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            codeEditor.value = event.target.result;
        };
        reader.readAsText(file);
    }
}

// Add event listeners for file inputs
document.getElementById("html-file").addEventListener("change", function () {
    handleFileInput(this, html);
});

document.getElementById("css-file").addEventListener("change", function () {
    handleFileInput(this, css);
});

document.getElementById("js-file").addEventListener("change", function () {
    handleFileInput(this, js);
});











initialize();


/*
function initialize() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;
    
    // Function to save the code as a file
    function saveFile(content, fileName, fileType) {
        var blob = new Blob([content], { type: fileType });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
    }

    document.body.onkeyup = function () {
        code.open();
        code.writeln(
            html.value +

            "<style>" + css.value + "</style>" +

            "<script>" + js.value + "</script>"
        );

        code.close();
    }

    // Add a click event listener to the "Save Code" button
    document.getElementById("save-code").addEventListener("click", function () {
        saveFile(html.value, "index.html", "text/html");
        saveFile(css.value, "style.css", "text/css");
        saveFile(js.value, "script.js", "text/javascript");
    });
}

function applyTheme(themeClass) {
    // Remove all existing theme classes from the code editors
    const editors = document.querySelectorAll('.editors textarea');
    editors.forEach(editor => {
        editor.classList.remove('light-theme', 'dark-theme');
        editor.classList.add(themeClass);
    });

    // Save the selected theme preference in localStorage for persistence
    localStorage.setItem('theme', themeClass);
}

// Retrieve the saved theme preference from localStorage
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme or a default theme (e.g., 'light-theme' if none is saved)
applyTheme(savedTheme || 'light-theme');

initialize();
*/