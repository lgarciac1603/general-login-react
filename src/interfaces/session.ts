export interface SessionState {
  id: string;
  name: string;
  admin: boolean;
  token: string;
}

export type SessionPayload = Pick<SessionState, "id" | "token">;
