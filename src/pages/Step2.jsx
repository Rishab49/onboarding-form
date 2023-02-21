import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FileInput from "../components/FileInput";
import Form from "../components/Form";
import Label from "../components/Label";
import OutlinedInput from "../components/OutlinedInput";
import RadioInput from "../components/RadioInput";
import SolidButton from "../components/SolidButton";
import { handleFile } from "../methods/Helper";
import { add } from "../store/FormSlice";

const Step2 = ({setProgress}) => {

  useEffect(() =>  setProgress(33),[]);


  const dispatch = useDispatch();
  const naivgate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let iter = formData.entries();
    let data = {};
    for (let d of iter) {
      d[0] == "document"
        ? (data[d[0]] = await handleFile(d[1]))
        : (data[d[0]] = d[1]);
    }
    dispatch(add({ formName: "FORM2", value: data }));
    naivgate("/step/3");
  }

  return (
    <Form handleSubmit={handleSubmit}>
      <h1 className="font-bold text-3xl">Step 2</h1>
      <hr width="100%"></hr>
      <div className="flex gap-2 items-center">
        <div className="relative flex items-center">
          <Label text="First Name">
            <OutlinedInput
              name="first_name"
              placeholder="e.g. Ram"
              regex="[A-Za-z]+"
              onInvalid={(e) =>
                e.target.setCustomValidity("Enter alphabets only")
              }
            />
          </Label>
        </div>
        <div className="relative flex items-center">
          <Label text="Last Name">
            <OutlinedInput
              name="last_name"
              placeholder="e.g. Singh"
              regex="[A-Za-z]+"
              onInvalid={(e) =>
                e.target.setCustomValidity("Enter alphabets only")
              }
            />
          </Label>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative flex items-center">
          <Label text="Contact No.">
            <OutlinedInput
              name="contact"
              placeholder="e.g. 1001001001"
              regex="[0-9]{10}"
              onInvalid={(e) =>
                e.target.setCustomValidity("Enter 10 digit number")
              }
            />
          </Label>
        </div>
        <div className="relative flex items-center">
          <Label text="Gender">
            <OutlinedInput
              name="gender"
              placeholder="e.g. Male"
              regex="[A-Za-z]+"
              onInvalid={(e) =>
                e.target.setCustomValidity("Enter alphabets only")
              }
            />
          </Label>
        </div>
      </div>
      <div className="flex items-center relative ">
        <Label text="Email">
          <OutlinedInput
            name="email"
            placeholder="e.g. something@gmail.com"
            type="email"
          />
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <fieldset className="w-full flex flex-row h-fit border p-2 rounded-md">
          <legend className="text-sm text-gray-400">Plan*</legend>
          <div className="flex items-center justify-center flex-1 ">
            <label
              text="Basic Plan"
              className="flex items-center justify-center gap-2 text-sm text-gray-400 "
            >
              <p>Basic Plan </p>
              <RadioInput name="plan" value="Basic" />
            </label>
          </div>
          <div className="flex items-center justify-center flex-1">
            <label
              text="Basic Plan"
              className="flex items-center justify-center gap-2 text-sm text-gray-400 "
            >
              <p>Pro Plan </p>
              <RadioInput name="plan" value="Pro" />
            </label>
          </div>
        </fieldset>
      </div>
      <FileInput name="document" />
      <hr width="100%"></hr>
      <SolidButton name="Submit" />
    </Form>
  );
};

export default Step2;
