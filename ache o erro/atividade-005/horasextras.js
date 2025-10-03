function fnHorasExtras(salario, horastrabalhadas, cargahoraria) {
    let horasextras = 0
    if(salario < 0){
        return 'todos os valores devem ser positivos'
    }
    
    

    if(horastrabalhadas > cargahoraria){
        horasextras = (horastrabalhadas - cargahoraria) * salario
        console.log(horastrabalhadas , cargahoraria, salario, horasextras)
    }

    return horasextras
}