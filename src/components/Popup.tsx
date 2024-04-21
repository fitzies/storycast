"use client";

import { DialogContent } from "./ui/dialog";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Form from "./Form";

function Popup() {
  const [formState, setFormState] = useState<"login" | "signup">("login");

  return (
    <DialogContent className="sm:max-w-[425px]">
      {/* <DialogHeader></DialogHeader> */}
      <div className="w-full">
        <Tabs
          defaultValue="account"
          className="flex flex-col gap-4"
          value={formState}
        >
          <TabsList className="mx-auto w-full hidden">
            <TabsTrigger
              value="login"
              className="w-1/2"
              onClick={() => setFormState(() => "login")}
            >
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="w-1/2">
              Sign up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Form
              title="Login"
              description={
                <p>
                  Please enter your email and password to continue or{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() => setFormState(() => "signup")}
                  >
                    create an account.
                  </span>
                </p>
              }
            />
          </TabsContent>
          <TabsContent value="signup">
            <Form
              title="Create an account"
              description={
                <p>
                  Please enter your email and password to create an account or{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() => setFormState(() => "login")}
                  >
                    login.
                  </span>
                </p>
              }
            />
          </TabsContent>
        </Tabs>
      </div>
    </DialogContent>
  );
}

export default Popup;
