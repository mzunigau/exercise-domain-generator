let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'UsWWW','racoon', 'Us','Plus','USA'];
let end = ['com', 'us','net', 'io', 'org']


function generateDomain() {   
      for (let i = 0; i < pronoun.length; i++) {
        for (let x = 0; x < adj.length; x++) {
            for (let y = 0; y < noun.length; y++) {
                for (let z = 0; z < end.length; z++) {
                    let palabra=`${pronoun[i]}${adj[x]}${noun[y]}`                
                    if(palabra.includes(end[z])){
                        let rm = palabra.replace(end[z], "");
                        domainFinal = `${rm}.${end[z]}`
                        console.log(domainFinal)
                    } else {
                        console.log(`${palabra}.${end[z]}`)
                    }                                         
                    
                }
            }
        }
    }    
}




console.log(generateDomain());