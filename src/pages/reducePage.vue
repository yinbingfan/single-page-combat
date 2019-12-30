<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      wizards: [
        {
          name: "Harry Potter",
          house: "Gryfindor"
        },
        {
          name: "Cedric Diggory",
          house: "Hufflepuff"
        },
        {
          name: "Tonks",
          house: "Hufflepuff"
        },
        {
          name: "Ronald Weasley",
          house: "Gryfindor"
        },
        {
          name: "Hermione Granger",
          house: "Gryfindor"
        }
      ]
    };
  },
  methods: {
    sumAdd() {
      [1, 2, 3].forEach(num => {
        this.total += num;
      });

      let totals = [1, 2, 3].reduce(function(sum, current) {
        return sum + current;
      }, 0);

      let hufflepuff = this.wizards
        .filter(function(wizard) {
          return wizard.house === "Hufflepuff";
        })
        .map(function(wizard) {
          return wizard.name;
        });
      let hufflepuffs = this.wizards.reduce(function(newArr, wizard) {
        if (wizard.house === "Hufflepuff") {
          newArr.push(wizard.name);
        }
        return newArr;
      }, []);
      alert(totals, hufflepuff, hufflepuffs);
    }
  },
  mounted() {
    this.sumAdd();
  }
};
</script>

<style>
</style>