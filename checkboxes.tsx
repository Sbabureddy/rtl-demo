import { Checkbox } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./styles.css";
import { DevTool } from "@hookform/devtools";

const availableTags = ["First tag", "Second tag", "Third tag"];

const defaultValues = {
  tags: ["First tag"],
};

export default function App() {
  const { register, control, handleSubmit } = useForm<FormValues>({
    defaultValues,
  });
  const [submittedTags, setSubmittedTags] = useState<string[] | null>(null);
  const onSubmit = (data) => setSubmittedTags(data.tags);

  return (
    <div>
      <h1>Checkbox group with Material UI partially working</h1>
      {submittedTags !== null && (
        <div className="submitted-tags">
          Submitted tags: {JSON.stringify(submittedTags)}
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="tags"
          render={({ field }) => {
            const { onChange, value: selectedTags, ...props } = field;

            return (
              <>
                {availableTags.map((tag) => {
                  return (
                    <div key={tag}>
                      <Checkbox
                        {...props}
                        onChange={(event) => {
                          const value = event.target.value;
                          const toBeRemoved = selectedTags.indexOf(value) > -1;

                          onChange(
                            toBeRemoved
                              ? selectedTags.filter((t) => t !== value)
                              : [...selectedTags, value]
                          );
                        }}
                        defaultChecked={selectedTags.indexOf(tag) > -1}
                        value={tag}
                      />
                      {tag}
                    </div>
                  );
                })}
              </>
            );
          }}
        />
        <input type="submit" />
      </form>
      <DevTool control={control} />
    </div>
  );
}
