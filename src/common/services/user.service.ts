import type { IParams } from "../types/parameter";
import type { TypeResponse } from "../types/response";
import type { CreateUserPayload, IUser } from "../types/user";
import api from "../utils/api";

export const getProfile = async (): Promise<TypeResponse<IUser>> => {
  const { data } = await api.get("/user/private");
  return data;
};

export const getAllUser = async (
  params?: IParams,
): Promise<TypeResponse<IUser[]>> => {
  const { data } = await api.get(`/user/all`, { params });
  return data;
};

export const bannedUser = async (
  id: string,
  payload: { isBanned: boolean; description: string; bannedAt: string },
): Promise<TypeResponse<IUser>> => {
  const { data } = await api.patch(`/user/banned/${id}`, payload);
  return data;
};

export const createUser = async (
  payload: CreateUserPayload,
): Promise<TypeResponse<IUser>> => {
  const { data } = await api.post("/user/create", payload);
  return data;
};
export const updateUser = async (
  id: string,
  payload: Partial<IUser>,
): Promise<TypeResponse<IUser>> => {
  const { data } = await api.patch(`/user/update-admin/${id}`, payload);
  return data;
};
