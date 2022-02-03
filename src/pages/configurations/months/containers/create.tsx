import Form from "../components/form";

export default function () {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return <Form onSubmit={handleSubmit} initialValues={{}} />;
}
