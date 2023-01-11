import React, { useState } from "react";
import { debounce } from "utils/debounce";
import { z } from "zod";

interface IEmailAndPassword {
  email: string;
  password: string;
}

const defForm = {
  email: "",
  password: "",
};

const emailAndPassSchema = z.object({
  email: z.string({
    required_error: "email is required",
    invalid_type_error: "email must be a string",
  }),
  paswword: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }),
});

const EmailAndPassAuth = () => {
  const [form, setForm] = useState<IEmailAndPassword>(defForm);

  const onChange = debounce((name: string, value: string) => {
    console.log(name, value);
    // const { name, value } = el as HTMLInputElement;
    console.log(name, value);
    setForm((prev) => ({ ...prev, [name]: value }));
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const results = emailAndPassSchema.safeParse(form);
    console.log(results);
  };

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <div className="mb-6">
        <input
          value={form.email}
          onChange={(e) => {
            onChange(e.target.name, e.target.value);
          }}
          className="dui-input dui-input-bordered w-full my-2"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          value={form.password}
          onChange={(e) => onChange(e.target)}
          className="dui-input dui-input-bordered w-full my-2"
          type="text"
          placeholder="Password"
          name="password"
        />
      </div>
      <button type="submit" className="dui-btn dui-btn-primary">
        Register
      </button>
    </form>
  );
};

export default EmailAndPassAuth;
