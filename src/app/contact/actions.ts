"use server";

interface FormState {
  errors?: string[];
  message?: string;
}

export async function contactAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const errors: string[] = [];

  if (!name || name.toString().trim().length < 3) {
    errors.push("Name must be at least 3 characters long");
  }

  if (!email || !email.toString().includes("@")) {
    errors.push("Please provide a valid email address");
  }

  if (!message || message.toString().trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  }

  if (errors.length > 0) {
    return { errors };
  }

  // Here you would typically send the data to your backend
  // For now, we'll just simulate a successful submission
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    message: "Message sent successfully!",
  };
}
