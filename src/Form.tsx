import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"

const FormSchema = z.object({
  months: z.string().min(1, {
    message: "Los meses son requeridos",
  }),
})

export type InputFormProps = {
    showResult: (result: number) => void;
}

export function InputForm(props: InputFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      months: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(JSON.stringify(data, null, 2));
      const saturation = -0.0028*parseInt(data.months, 10) + 93.65;
      console.log(saturation);
      props.showResult(saturation);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
        <FormField
          control={form.control}
          name="months"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-left">Meses</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Cuantos meses tiene el niño" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4">Calcular</Button>
      </form>
    </Form>
  )
}
