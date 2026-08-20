import { describe, expect, it } from "vitest";
import { formatDuration, readingTime } from "./utils";

describe("formatDuration", () => {
  it("counts the start month as part of the duration", () => {
    expect(formatDuration(new Date(2024, 0, 1), new Date(2024, 0, 15))).toBe(
      "1 mo",
    );
  });

  it("formats a multi-year span with leftover months", () => {
    expect(formatDuration(new Date(2022, 0, 1), new Date(2024, 5, 1))).toBe(
      "2 yrs 6 mos",
    );
  });

  it("formats an exact number of years with no leftover months", () => {
    expect(formatDuration(new Date(2022, 0, 1), new Date(2024, 0, 1))).toBe(
      "2 yrs 1 mo",
    );
  });

  it("never returns less than 1 month even if end precedes start", () => {
    expect(formatDuration(new Date(2024, 5, 1), new Date(2024, 0, 1))).toBe(
      "1 mo",
    );
  });
});

describe("readingTime", () => {
  it("strips HTML tags before counting words", () => {
    expect(readingTime("<p>one two three</p>")).toBe("1 min read");
  });

  it("estimates longer reads from word count", () => {
    const html = `<p>${"word ".repeat(400)}</p>`;
    expect(readingTime(html)).toBe("3 min read");
  });

  it("returns a 1 min read for empty content", () => {
    expect(readingTime("")).toBe("1 min read");
  });
});
