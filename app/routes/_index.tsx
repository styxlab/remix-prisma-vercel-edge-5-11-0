import { UserStatus } from "@prisma/client";

export const config = { runtime: 'edge' };

export default function Index() {
   const status = UserStatus.ACTIVE;
    return (
      <h1>Prisma Test {status}</h1>
    );
  }
  