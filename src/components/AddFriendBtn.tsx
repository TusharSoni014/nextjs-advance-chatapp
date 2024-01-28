"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "./ui/use-toast";

const formSchema = z.object({
  email: z.string().email(),
});

const AddFriendBtn = () => {
  const [showSuccessState, setShowSuccessState] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const addFriend = async ({ email }: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/friends/add", {
        email: email,
      });
      setShowSuccessState(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        form.setError("email", { message: error.message });
        toast({
          variant: "destructive",
          description: error.message,
        });
      }
      if (error instanceof AxiosError) {
        form.setError("email", { message: error.response?.data });
        toast({
          variant: "destructive",
          description: error.response?.data,
        });
      }
      toast({
        variant: "destructive",
        description: "Something went wrong! Please try again",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(addFriend)} className="flex gap-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email of your friend" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send Request</Button>
      </form>
    </Form>
  );
};

export default AddFriendBtn;
