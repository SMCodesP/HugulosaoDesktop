import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {
  ButtonSubmitForgot,
  BuyerContainer,
  Container,
  FormForgotBody,
  GroupInputForgot,
  LabelInputForgot,
  ForgotForm,
  ForgotSubTitle,
  ForgotTitle,
  LogoImage,
  TextInputForgot,
  BackToLogIn,
} from '@/styles/pages/forgot-password';

import buyerImage from '@/public/buyer.svg';

const ForgotPassword: NextPage = () => {
  return (
    <Container>
      <ForgotForm>
        <LogoImage src="/logo.png" />
        <ForgotSubTitle>
          Solicite a redefinição de senha
        </ForgotSubTitle>
        <ForgotTitle>Esqueceu sua senha?</ForgotTitle>
        <FormForgotBody>
          <GroupInputForgot>
            <LabelInputForgot htmlFor="email">
              E-mail
            </LabelInputForgot>
            <TextInputForgot
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </GroupInputForgot>
          <ButtonSubmitForgot>
            Redefinir senha
          </ButtonSubmitForgot>
          <Link href="/login">
            <BackToLogIn>Voltar para login</BackToLogIn>
          </Link>
        </FormForgotBody>
      </ForgotForm>
      <BuyerContainer>
        <Image src={buyerImage} alt="Buyer image" />
      </BuyerContainer>
    </Container>
  );
};

export default ForgotPassword;
