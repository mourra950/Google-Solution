import React from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";

const { Option } = Select;

const inputStyle = {
  fontSize: "1.2rem", // Adjust this value to change the font size
};

const FormComponent = ({ config, onSubmit, result }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    
    const formattedDate = values?.date?.format("YYYY-MM-DD");
    console.log({ ...values, date: formattedDate })

    onSubmit({ ...values, date: formattedDate },result);
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "left" }}>
      <Form
        form={form}
        onFinish={handleSubmit}
        autoComplete="off"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
      >
        {config.map((field) => (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            rules={[{ required: field.required }]}
          >
            {field.type === "select" ? (
              <Select style={{ width: "100%" }} placeholder={field.label}>
                {field.choices.map((choice) => (
                  <Option key={choice.value} value={choice.value}>
                    {choice.label}
                  </Option>
                ))}
              </Select>
            ) : field.type === "date" ? (
              <DatePicker style={{ width: "100%", textAlign: "left" }} />
            ) : (
              <Input style={{ ...inputStyle, width: "100%", textAlign: "left" }} />
            )}
          </Form.Item>


        ))}
        <Form.Item style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={handleReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
