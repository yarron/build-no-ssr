import React, {
  FC, useContext, useEffect, useState,
} from 'react';
import { Helmet } from 'react-helmet-async';
import { LoadingCircle } from '@/ui';
import TronContext from '@/context/tron';
import Button from '@material-ui/core/Button';

const HomePage: FC = () => {
  const { contract } = useContext(TronContext);
  const [loading, setLoading] = useState(false);
  // const [localValueStr] = useState('');

  useEffect(() => {
    if (contract) {
      (async () => {
        if (contract.Transfer) {
          contract.Transfer().watch(
            async (err: string, event: unknown): Promise<void> => {
              if (err) {
                console.error('Error with "method" event:', err);
              }
              if (event) {
                console.log('event Transfer', event);
              } else {
                console.log('NO');
              }
            },
          );
        }

        if (contract.Approval) {
          contract.Approval().watch(
            async (err: string, event: unknown): Promise<void> => {
              if (err) {
                console.error('Error with "method" event:', err);
              }
              if (event) {
                console.log('event Approval', event);
              } else {
                console.log('NO');
              }
            },
          );
        }
      })();
    }
  }, [contract]);

  return (
    <>
      <Helmet title="Tron contract" />
      <h2>Tron contract</h2>
      <LoadingCircle isLoading={!contract} />
      <Button variant="contained" color="secondary" onClick={handleSetString} disabled={loading}>SetString</Button>
    </>
  );

  async function handleSetString() {
    setLoading(true);
    // await contract.setString(localValueStr).send({
    //   feeLimit: 100000000,
    //   callValue: 0,
    //   shouldPollResponse: true,
    // });
    setLoading(false);
  }
};

export default HomePage;
