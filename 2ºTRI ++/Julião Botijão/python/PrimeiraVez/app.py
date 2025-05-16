
while True:

    #criando variáveis
    nome = input("digite seu nome: ") #input string
    nota1 = float(input("digite sua primeira nota: ")) #input numérico
    nota2 = float(input("digite sua segunda nota: ")) #input numérico

    #variavel calculando a média
    media = (nota1 + nota2) / 2

    #formas de mostrar sua string junto da variavel:
    #print(nome", sua nota é", media)
    #print(f"{nome}, sua média é {media}")

    if media < 6:
        print(f"mano, tu tirou {media}, {nome}, seu otário")
    else:
        print(f"parabens, {nome}, tu passou com {media}")

    continuar = input("deseja continuar novamente? [s/n] ")

    if continuar != "s":
        print("saindo...")
        break
