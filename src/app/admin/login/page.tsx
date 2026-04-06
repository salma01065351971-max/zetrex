import { loginAdmin } from "../actions";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

type Props = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: Props) {
  const { error } = await searchParams;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-10">
      <Card className="w-full p-6">
        <h1 className="text-2xl font-black">Admin Login</h1>
        <p className="mt-1 text-sm text-white/65">Enter dashboard password to continue.</p>
        <form action={loginAdmin} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Strong Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </Card>
    </div>
  );
}
