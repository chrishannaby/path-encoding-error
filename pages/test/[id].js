export async function getStaticProps({ params }) {
  const { id } = params;
  return {
    revalidate: 60,
    props: {
      id,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "OPMarked#1818" } }],
    fallback: "blocking",
  };
}

export default function Test({ id }) {
  return <p>{id}</p>;
}
