module.exports = {
  description: "生成page/component", //描述这个generate的作用
  prompts: [
    {
      type: "input",
      name: "name",
      message: "page/component名", // 在命令行中的问题
    },
  ],
  actions: function (data) {
    data.name = data.name.replace(data.name[0], data.name[0].toUpperCase());
    let actions = [];
    if (data.name.indexOf(" ") != -1) {
      let page = data.name.split(" ")[0];
      let component = data.name.split(" ")[1];
      component = component.replace(component[0], component[0].toUpperCase());
      actions.push({
        type: "add",
        path: `src/pages/${page}/${component}/index.jsx`,
        templateFile: "plop-templates/next/index.hbs",
        data: {
          nextName: component,
        }
      });
      actions.push({
        type: "add",
        path: `src/pages/${page}/${component}/index.module.scss`,
      })
      actions.push({
        type: "add",
        path: `src/pages/${page}/${component}/index.module.css`,
      })
    }else{
        actions = [
            {
              type: "add",
              path: "src/pages/{{name}}/{{name}}.jsx",
              templateFile: "plop-templates/next/index.hbs",
              data: {
                nextName: data.name,
              },
            },
            {
              type: "add",
              path: "src/pages/{{name}}/index.module.scss",
            },
            {
              type: "add",
              path: "src/pages/{{name}}/index.module.css",
            }
          ];
    }
    return actions;
  },
};
  