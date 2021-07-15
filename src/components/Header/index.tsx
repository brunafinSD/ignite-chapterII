import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    // quando recebemos nas props uma função começa com "on"
    // () => void significa que a função não recebe nenhum parâmetro e não retorna nada
    onOpenNewTransaction: () => void;
}

export function Header({onOpenNewTransaction} : HeaderProps) {
    return (
        <Container>
            <Content>
                
            <img src={logoImg} alt="dt money" />

            <button
            type="button"
            onClick={onOpenNewTransaction}
            >
                Nova transação
            </button>

            </Content>
        </Container>
    );
}