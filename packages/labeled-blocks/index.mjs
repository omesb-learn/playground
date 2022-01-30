const omes = "omes"

block : {
    console.log(omes)
    const felix = "felix"
    console.log(felix)
}


block2 : {
    console.log(omes)       // throws Error !
    const omes = "felix"
    console.log(omes)
}
