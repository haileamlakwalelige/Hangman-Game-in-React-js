var programmingLanguage= [ 'java', 'html', 'css', 'python', 'javascript', 'csharp','flutter','ruby', 'php','react','angular', 'vue','dart',  'kotlin','sql', 'fortran', 'json', 'mongodb',  'golang',  'r', 'c']

function randomWord (){
    return programmingLanguage[Math.floor(Math.random()*programmingLanguage.length)]
}

export  {randomWord};