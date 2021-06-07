import { GetStaticPaths } from 'next';
import { useSelector, useStore } from 'react-redux';
import { wrapper } from '../../store';
import { fetchTest, selectTest } from '../../store/test';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Id(props: any): JSX.Element {
  const test = useSelector(selectTest(1));
  console.log('Props', props);
  console.log('On render', useStore().getState(), { props });
  console.log(test);
  return (
    <>
      {' '}
      <h1>Hello Example {JSON.stringify(test)}!</h1>{' '}
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async (_) => {
  const paths = [{ params: { id: '5' } }];
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const { id } = params as any;
      await store.dispatch(fetchTest(id));
      console.log('on Server', store.getState());
      return {
        props: {
          id,
        },
      };
    },
);
