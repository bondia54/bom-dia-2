#criando variáveis
nota1 = float(input("digite sua nota 1: ")) #input numérico
nota2 = float(input("digite sua nota 2: ")) #input numérico
nome = input("digite seu nome: ") #input string

#variavel calculando a média
media = (nota1 + nota2) / 2

#formas de mostrar sua string junto da variavel:
#print("sua nota é", media)
#print(f"{nome}, sua média é {media}")

if media < 6:
    print(f"mano, tu tirou {media}, {nome}, seu otário")
else:
    print(f"parabens, {nome}, tu passou com {media}")
