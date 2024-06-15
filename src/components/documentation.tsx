import { poppins } from "@/app/fonts";

export default function Documentation(){
    return (
        <article className={`container-documentation px-3 ${poppins.variable}`}>
            <h1>Como usar a calculadora de Tradepack?</h1>
            <p>Todos os campos circulados em branco precisam ser preenchidos</p>
            <div className="bg-primary pl-12 pr-5 py-5 rounded-[10px]">
                <ul className="list-decimal">
                    <li>Selecione sua <strong>Rota de Início</strong></li>
                    <li>Selecione sua <strong>Rota de Entrega</strong></li>
                    <li>Selecione as <strong>Porcentagens</strong>, caso haja os pontos de reputação e se você está no chanel <strong>Warmode</strong></li>
                    <li>Preencha a quantidade <strong>Total de Tradepacks</strong> que você deseja criar</li>
                    <li>Preencha o valor correspondente da <strong>Demanda</strong> que está sendo utilizada no momento</li>
                    <li>O custo dos Tradepack são baseados na média do mercado, caso você queira mudar os valores basta utilizar a <strong>Seta do lado esquerdo e alterar seus valores</strong></li>
                </ul>
            </div>
        </article>
    )
}