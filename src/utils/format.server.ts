
import { Post, PrismaClient, User } from "@prisma/client";

PrismaClient

export type userPick = Pick<
  User,
  "firstName" |"email" | "password"|"profileImg"|"createdAt"|"userId"|"lastName"|"location"|"occupation"
>;

export type postPick = Pick<
Post,
"createdAt"|"location"|"photo"|"postDescription"|"postId"|"userId"
>;
export type loginPick = Pick<User, "email" | "password">;
// export type profilePick = Profile;

// export type userProfilePick = Pick<
//   User & Profile,
//   | "documentNumber"
//   | "password"
//   | "role"
//   | "corporationId"
//   | "firstName"
//   | "lastName"
//   | "phone"
//   | "email"
//   | "degree"
//   | "image"
// >;

// export type patientPick = Pick<
//   Patient,
//   |"firstName"
//   | "lastName"
//   | "documentNumber"
//   | "dateBirth"
//   | "location"
//   | "gender"
//   | "numberPhone"
//   | "department"
//   | "province"
//   | "district"
//   | "bloodType"
//   | "physicalHistory"
//   | "image"
//   | "job"
//   | "corporationId"
// >;


// export type doctorPick = Pick<Doctor,
// |"medicalRelation"
// |"cieCod"
// |"userId"


// >;
// export type laboratyPick = Pick<
// Laboratory,
// "corporationId"

// >

 

// export type profileUpdatePick = Pick<
//   User & Profile,
//   "id" | "firstName" | "lastName" | "phone" | "degree" | "image"
// >;

// export type corporationCreatePick = Pick<
//   Corporation,
//   "name" | "ruc" | "fullDescription"
// >;
export type errorProp = {
  errorContent?: string;
  status: number;
  message: string;
};