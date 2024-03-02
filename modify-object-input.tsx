import React, { ChangeEvent } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";

import "./styles.css";

type IceCream = { label: string; value: string };

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: IceCream;
}

const App = () => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <Controller
        render={({ field }) => <Input {...field} className="materialUIInput" />}
        name="firstName"
        control={control}
        defaultValue=""
      />
      <label>First Name</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="lastName"
        control={control}
        defaultValue=""
      />
      <label>Ice Cream Preference</label>
      <Controller
        name="iceCreamType"
        render={({ field }) => (
          <Select
            onChange={(e) => {
              // console.log(e);
              const transform = (obj) => {
                // console.log(typeof val);
                // const val = { ...obj };
                const newVal = {};
                // newVal.label = val.label.toUpperCase();
                // newVal.value = val.value.toUpperCase();
                // console.log(newVal);
                // const ice = Object.keys(obj).forEach((key) => {
                //   if (key === "value") obj[key] = obj[key].toUpperCase();
                //   obj[key] = obj[key];
                // });
                for (let item of Object.keys(obj)) {
                  // console.log(item);
                  newVal[item] = obj[item].toUpperCase();
                }
                // console.log(ice);
                return newVal;
              };
              // console.log(transform(e));
              field.onChange(transform(e));
            }}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
        control={control}
        defaultValue=""
      />
      <Controller
        name="Checkbox"
        control={control}
        render={({ field }) => <Checkbox {...field} />}
      />

      <input type="submit" />
    </form>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
