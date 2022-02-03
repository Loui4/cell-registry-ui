import { FC } from "react";
import * as Yup from "yup";
import { FormComponents } from "../../../../components";

const { Form, TextInput } = FormComponents;
type IProps = {
  onSubmit: (values: any) => void;
  initialValues: any;
};

const YearForm: FC<IProps> = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object().shape({
    year: Yup.string().required().label("year"),
    start: Yup.string().required().label("start"),
    end: Yup.string().required().label("end"),
  });

  return (
    <div
      className="
        flex flex-col flex-grow
        border-primary-100
        hover:border-gray-300
        p-5
      "
    >
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <div className="flex flex-wrap my-6">
          <div className="w-full">
            <TextInput
              id="year"
              label="year"
              name="year"
              placeholder="year ..."
            />
          </div>
        </div>
        <div className="flex flex-wrap my-6">
          <div className="w-full">
            <TextInput
              id="start"
              label="year"
              name="start"
              placeholder="start ..."
              type="date"
            />
          </div>
        </div>
        <div className="flex flex-wrap my-6">
          <div className="w-full">
            <TextInput
              id="end"
              label="end"
              name="end"
              placeholder="end ..."
              type="date"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default YearForm;
