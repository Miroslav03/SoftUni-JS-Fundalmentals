function tseamAccount(array) {

    let account = array.shift().split(` `)
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i].split(` `);
        let command = element[0]
        let game  = element[1]
        
        switch (command) {
            case `Install`:{
                if(!account.includes(game)){
                    account.push(game)
                }
                break;
            }
            case `Uninstall`:{
                if(account.includes(game)){
                    account = account.filter(a => a != game)
                }
                break;
            }    
            case `Update`:{
                if(account.includes(game)){
                    account = account.filter(a => a != game)
                    account.push(game)
                }
                break;
            }
            case `Expansion`:{
                let value = game.split(`-`)
                let gamee = value[0]
                let expansion = value[1]
                if(account.includes(gamee)){
                    let index = account.indexOf(gamee)
                    let firstHalf = account.slice(0,index+1)
                    firstHalf.push(`${gamee}:${expansion}`)
                    let secondHalf = account.slice(index+1)
                    account = firstHalf.concat(secondHalf)
                }
                break;
            }
            case `Play!`:{
                return console.log(account.join(` `));
                
            }        
            
        }
        
    }



} tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']


)