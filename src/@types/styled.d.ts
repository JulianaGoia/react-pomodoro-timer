// a extensao .d.ts significa que é um arquivo que só tem definições de tipos(tipagem) do typescript

//importe quando vc quer sobrescrever alguma tipagem do styled components. Se for uma customização do zero, não precisa importar
import 'styled-components'; 
import { defaultTheme } from '../styles/themes/default';

// guarda dentro da variavel as propriedades que tem dentro do tema
type ThemeType = typeof defaultTheme;

// criando uma tipagem para o modulo styled-components
// toda vez que o styled-components for importado em algum arquivo, ele ira puxar a tipagem definida abaixo
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}

}