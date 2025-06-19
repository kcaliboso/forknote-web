import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import axios from "../lib/axios";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useAuthStore } from "@/stores/auth";

export default function LoginForm() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.saveAuth);

  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter your email.",
    }),
    password: z.string().min(8).max(32),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await axios
      .post("/v1/auth/login", {
        ...values,
      })
      .then(({ data: response }) => {
        login(response.data);
        navigate("/my/recipe/list");
      })
      .catch((error) => {
        toast(error.response.data.message);
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-6 w-full px-4 py-6 h-full justify-center "
      >
        <h1 className="self-center text-3xl font-medium">Login</h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Email"
                  {...field}
                  autoComplete="off"
                  className="h-12"
                />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  {...field}
                  className="h-12"
                />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <Button type="submit" className="self-end">
          Submit
        </Button>
      </form>
    </Form>
  );
}
