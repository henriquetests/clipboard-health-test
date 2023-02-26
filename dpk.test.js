const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("If the event has a partition key, candidate must have the same value", () => {
    const event = {
      partitionKey: "test",
    };
    const candidate = deterministicPartitionKey(event);
    expect(candidate).toBe("test");
  });

  it("If the event has no partition key, return a hash of the event", () => {
    const event = {
      test: "test",
    };
    const candidate = deterministicPartitionKey(event);
    expect(candidate).toBe(
      "e713e2c89bc829e783a43a53583c0f8db2e9ad5f392f88d3a3be9776a5d6307ddaa4fb1d427c2390be1834bcf73646ddbbab8979eaf923e01376b3031ef9189d"
    );
  });

  it("If the candidate is not a string, convert it to a string", () => {
    const event = {
      partitionKey: 123,
    };
    const candidate = deterministicPartitionKey(event);
    expect(candidate).toBe("123");
  });

  it("If the candidate lenght is longer than 256 characters, return a hash of the candidate", () => {
    const event = {
      partitionKey:
        "e713e2c89bc8229e783a43a53583c0f8db2e9ad5f392f88d3a3be9776a5d6307ddaa4fb1d427c2390be1834bcf73646ddbbab8979eaf923e01376b3031ef9189de713e2c89bc829e783a43a53583c0f8db2e9ad5f392f88d3a3be9776a5d6307ddaa4fb1d427c2390be1834bcf73646ddbbab8979eaf923e01376b3031ef9189d",
    };
    const candidate = deterministicPartitionKey(event);
    expect(candidate).toBe(
      "c228837898e59dd4ebbd4717f3df18db655f9d5433c483838ecc0f5710aad8235e4712fa07037adf07ab6c438e08deb178c04f12ad3d0c7f9f7f12c2c9c5fb09"
    );
  });
});
