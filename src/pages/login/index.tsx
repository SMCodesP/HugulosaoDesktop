import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {
  ButtonSubmitLogin,
  BuyerContainer,
  Container,
  ForgotPassword,
  FormLoginBody,
  GroupInputLogin,
  LabelInputLogin,
  LoginForm,
  LoginSubTitle,
  LoginTitle,
  LogoImage,
  TextInputLogin,
} from '@/styles/pages/login';

import buyerImage from '@/public/buyer.svg';

const Login: NextPage = () => {
  return (
    <Container>
      <LoginForm>
        <LogoImage src="/logo.png" />
        <LoginSubTitle>Bem-vindo novamente!</LoginSubTitle>
        <LoginTitle>Faça seu login</LoginTitle>
        <FormLoginBody>
          <GroupInputLogin>
            <LabelInputLogin htmlFor="email">
              E-mail
            </LabelInputLogin>
            <TextInputLogin
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </GroupInputLogin>
          <GroupInputLogin>
            <LabelInputLogin htmlFor="password">
              Senha
            </LabelInputLogin>
            <TextInputLogin
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </GroupInputLogin>
          <ButtonSubmitLogin>Entrar</ButtonSubmitLogin>
          <Link href="/forgot-password">
            <ForgotPassword>
              Esqueceu sua senha?
            </ForgotPassword>
          </Link>
        </FormLoginBody>
      </LoginForm>
      <BuyerContainer>
        <Image src={buyerImage} alt="Buyer image" />
      </BuyerContainer>
    </Container>
  );
};

export default Login;
