import { validate } from "./cron.ts";

function test(schedule: string, date: Date) {
  const validation = validate(schedule, date);

  console.log(
    date,
    validation.entries,
    validation.didMatch ? "✅ success" : "❌ failed",
  );
}

export const explain = (schedule: string) => {

}

Deno.test("Should execute from 1st to 7th day of every month on 3rd, 6th and 9th hour and every 30 minutes if it's monday", () => {
  console.log("");
  const schedule = "1 */30 3,6,9 1-7 */1 1";

  test(schedule, new Date("2021-11-01 03:00:01"));
  test(schedule, new Date("2021-11-02 03:00:01"));
});
