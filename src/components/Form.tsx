"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleAuthForm } from "@/lib/handler";
import { useFormStatus } from "react-dom";
import { useState } from "react";

function Submit({ title }: { title: string }) {
  const status = useFormStatus();
  return (
    <>
      {!status.pending ? (
        <Button className="w-full" type="submit">
          {title}
        </Button>
      ) : (
        <Button className="w-full" disabled>
          ...
        </Button>
      )}
    </>
  );
}

function Form({
  title,
  description,
}: {
  title: string;
  description: JSX.Element | string;
}) {
  const [error, setError] = useState<unknown>();

  return (
    <form
      action={async (data: FormData) => {
        try {
          await handleAuthForm(data);
        } catch (error) {
          console.error(error);
          setError(() => error);
        }
      }}
    >
      <Card className="mx-auto w-full border-transparent">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                name="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                name="password"
                pattern="(?=.*\d)(?=.*[\W_]).{7,}"
                title="Password must contain at least one number and one special character and be at least 7 characters long."
              />
            </div>
            {title === "Create an account" ? (
              <div className="space-y-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  required
                  type="password"
                  name="confirm-password"
                  pattern="(?=.*\d)(?=.*[\W_]).{7,}"
                  title="Password must contain at least one number and one special character and be at least 7 characters long."
                />
              </div>
            ) : null}
            {error ? (
              <p className="text-sm text-red-500">
                Email or password is incorrect
              </p>
            ) : null}
            <Submit title={title} />
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

export default Form;
