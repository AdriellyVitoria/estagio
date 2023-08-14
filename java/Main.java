import java.util.Scanner;

public class Main {
    private static int limite = 15;
    private static Scanner in = new Scanner(System.in);

    public static void main(String[] args) throws InterruptedException {
        executar();
    }

    public static void executar() throws InterruptedException {
        cantar_musica();
        String continuar_cantando = validacao_desejar_continuar();
        if (continuar_cantando.equals("s")){
            executar();
        } else {
            System.out.println("Volte Sempre");
        }
    }

    public static void cantar_musica() throws InterruptedException {
        String animal = "patinho";
        String som_do_animal = "Quá, quá, quá, quá";
        String mamae = "Patinha";

        int quantidade_de_bicho = receber_quantidade_bicho( animal);
        int quantidade_de_bicho_inicial = quantidade_de_bicho;

        while(quantidade_de_bicho >= 1 ){
            Thread.sleep(1000);

            System.out.println(quantidade_de_bicho + " " + animal + (quantidade_de_bicho == 1 ? "\nfoi" : "s\nforam") + " Passear \nAlém das montanhas\nPara brincar\nA mamãe gritou\n" + som_do_animal);

            quantidade_de_bicho -= 1;
            System.out.println("Mas " + (quantidade_de_bicho == 0 ? "Nenhum" : "só " + quantidade_de_bicho ) +  " " + animal + (quantidade_de_bicho <= 1 ? "\nVoltou" : "s\nVoltaram") + " de lá.\n" ); 
        }         
        Thread.sleep(2000);
        
        System.out.println("Poxa, a mamãe " + mamae +" ficou tão triste naquele dia\nAonde será que estavam os seus filhotinhos?\nMas essa história vai ter um final feliz\nSabe por quê?\n" +"\nA mamãe " + mamae + " foi procurar\nAlém das montanhas\nNa beira do mar\nA mamãe gritou\n" + som_do_animal+ "\nE "+ (quantidade_de_bicho_inicial == 1 ? "o " : "os ") + quantidade_de_bicho_inicial + " " + animal + (quantidade_de_bicho_inicial <= 1 ? "\nVoltou " : "s\nVoltaram ") + "de lá.\n" );
    }    

    public static int receber_quantidade_bicho(String animal){
        try {
            System.out.println("Digite a quantidade de " + animal + "s: ");
            int quantidade_de_bicho = Integer.parseInt(in.nextLine().strip().replace(".", ""));
            if(quantidade_de_bicho > 0 && quantidade_de_bicho <= limite){
                return quantidade_de_bicho;
            }
            System.out.println("Entrada inválida, digite SOMENTE um número inteiro maior que 0 e menor que " + ++limite + ".");
            return receber_quantidade_bicho(animal);
        } catch (NumberFormatException e) {
            System.out.println("Entrada inválida, digite SOMENTE um número inteiro maior que 0 e menor que " + ++limite + ".");
            return receber_quantidade_bicho(animal);
        }
        
    }

    public static String validacao_desejar_continuar() {
        try {
            System.out.println("Deseja continuar: S-[Sim] N-[Não]");
            String resposta = in.nextLine().trim().toLowerCase();
            if (resposta.equals("s") || resposta.equals("n")) {
                return resposta;
            }
            System.out.println("Escolha uma opção válida!");
            return validacao_desejar_continuar();
        } catch (Exception e) {
            System.out.println("Escolha uma opção válida!");
            return validacao_desejar_continuar();
        }
    }
}
