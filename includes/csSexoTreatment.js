/// função para de tratar CS_SEXO nas bases do Sinan

function csSexoTreatmenet(coluna) {
  return `
    CASE
      WHEN ${coluna} = 'F' THEN 'Feminino'
      WHEN ${coluna} = 'M' THEN 'Masculino'
      WHEN IS NULL THEN "Não preenchido",
      ELSE 'Ignorado'
    END
  `;
}
module.exports = {csSexoTreatmenet};

