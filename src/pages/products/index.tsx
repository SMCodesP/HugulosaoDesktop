import type { NextPage } from 'next';

import Menu from '@/components/Menu';

import { useAuth } from '@/contexts/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Title } from '@/styles/pages/home';
import { ContainerPage } from '@/styles/pages/geral';

import CardProduct from '@/components/CardProduct';
import { ListProducts } from '@/styles/pages/products';
import CardNewProduct from '@/components/CardNewProduct';

const Products: NextPage = () => {
  const { accessToken, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !accessToken) {
      router.push(`/login`);
    }
  }, [router, isLoaded, accessToken]);

  if (!isLoaded && !accessToken) {
    return <div />;
  }

  return (
    <>
      <Menu active="products" />

      <ContainerPage>
        <Title>Produtos</Title>

        <ListProducts>
          <CardNewProduct />
          <CardProduct />
        </ListProducts>
      </ContainerPage>
    </>
  );
};

export default Products;
