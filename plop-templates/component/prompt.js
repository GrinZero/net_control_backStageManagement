module.exports = {
    description: "生成components/{{name}}", //描述这个generate的作用
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component名", // 在命令行中的问题
      },
    ],
    actions: function (data) {
      data.name = data.name.replace(data.name[0], data.name[0].toUpperCase());
      let actions = [];
      actions = [
        {
          type: "add",
          path: "src/components/{{name}}/{{name}}.jsx",
          templateFile: "plop-templates/component/index.hbs",
          data: {
            nextName: data.name,
          },
        },
        {
          type: "add",
          path: "src/components/{{name}}/index.module.scss",
        },
        {
            type: "add",
            path: "src/components/{{name}}/index.module.css",
          }
      ];
      return actions;
    },
  };
    