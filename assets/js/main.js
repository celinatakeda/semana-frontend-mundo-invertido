import { subscribeToHellfireClube } from './data/hellfire-clube.js'

(function main() {
    const txtName = document.getElementById('txtName')
    console.log(txtName)
    const txtEmail = document.getElementById('txtEmail')
    const txtLevel = document.getElementById('txtLevel')
    const txtCharacter = document.getElementById('txtCharacter')

    document.getElementById('btnSubscribe').addEventListener('click', async () => {
        const subscribe = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }
        
        // Salvar no banco de dados!
        const id = await subscribeToHellfireClube(subscribe)
        alert(`Inscrição ${id} adicionada com sucesso!`)
    })
})()