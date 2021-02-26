let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'UsWWW'];
//'racoon', 'Us','Plus','USA'];
let end = ['com', 'us']; //, 'net', 'io', 'org']

let domain = [];

//"abc".slice(-1); // "c";

function generateDomain() {
    let nounLower;
    
    for (let i = 0; i < pronoun.length; i++) {
        for (let x = 0; x < adj.length; x++) {
            for (let y = 0; y < noun.length; y++) {
                
                //theLastofplUs .us  thelastofpl.us
                 nounLower = noun[y].toLowerCase();
                 let helper= false;
                
                //recorre las extensiones

                for (let z = 0; z < end.length; z++) {
                    
                    if (nounLower.includes( end[z] )) {    
                        //nounLower.search(end[z]);                                  
                        let res = nounLower.replace(end[z], '');
                        domain.push(pronoun[i] + adj[x] + res +"."+ end[z]);
                        helper= true;
                        break;                        
                        
                    }             
                    
                }

                if(!helper){

                    for (let v = 0; v < end.length; v++) {
                         domain.push(pronoun[i] + adj[x] + noun[y] +"."+end[v]);
                        
                    }


                }
                helper=false;





            }




        }
    }
    return domain;
}




console.log(generateDomain());