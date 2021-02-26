let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let domain = [];

function generateDomain() {

    for (let i = 0; i < pronoun.length; i++) {

        for (let index = 0; index < adj.length; index++) {


            for (let index = 0; index < noun.length; index++) {
                domain.push(pronoun + adj + noun + ".com");
            }

        }



    }
    return domain;
}