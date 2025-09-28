export default async function Page({ params }: { params: { id: string } }) {
  // สามารถใช้ async ได้ ถ้าในนี้มี fetch
  const { id } = params;

  return (
    <>
      <h1>Student ID : {id}</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatibus
        voluptas amet quas voluptate facere commodi repellat excepturi. Nulla quae
        excepturi enim ipsam necessitatibus omnis? Quibusdam nobis alias neque
        reiciendis.
      </p>
    </>
  );
}
