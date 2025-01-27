document.addEventListener('DOMContentLoaded', function() {

    const createBarChart = (ctx, labels, data, colors, id) => {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Nível de Habilidade',
                    data: data,
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderSkipped: false,
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 10,
                        display: true,
                        ticks: {
                            stepSize: 2,
                            color: 'black',
                            font: { weight: 'bold', size: 14 },
                             
                        },
                        grid: { display: false }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'black',
                             font: { weight: 'bold', size: 14 },
                                 callback: function(value, index) {
                                return labels[index].split('\n')
                            }
                        },
                        grid: { display: false }
                    }
                },
                plugins: { legend: { display: false },
                tooltip:{
                    enabled: true,
                    callbacks:{
                        label: function(context){
                            let label = context.dataset.label || '';
                            if (label){
                                label += ':';
                            }
                            label += context.formattedValue;
                            const labelName = context.label;
                            return [`${labelName}`,`${label}`]
                        }
                    }
                }
             }
            }
        });
    };


    const createRadarChart = (ctx, labels, data, colors,id) => {
        return new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Habilidades',
                    data: data,
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                    borderWidth: 1,
                }]
            },
            options: {
               elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                    scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        ticks:{
                            stepSize: 2,
                             color: 'black',
                            font:{
                                weight: 'bold',
                                size: 12
                            }
                        },
                            pointLabels: {
                                color: 'black',
                                font: {
                                    weight: 'bold',
                                    size: 14
                                },
                                  callback: function(value,index) {
                                    return labels[index].split('\n')
                                }
                            }
                    }
                },
                 plugins: {
                    legend: {
                        display: false
                    },
                    tooltip:{
                        enabled: true,
                        callbacks:{
                            label: function(context){
                                let label = context.dataset.label ||'';
                                if (label){
                                    label += ': ';
                                }
                                label += context.formattedValue;
                                const labelName = context.label;
                                return[`${labelName}`,`${label}`]
                            }
                        }
                    }
                }
            }
        });
    };

      const technicalSkillsChart = createBarChart(
        document.getElementById('technicalSkillsChart').getContext('2d'),
        ['Ferramentas de BI', 'Apresentação de KPI´s', 'SQL e Python', 'Análise de Dados', 'Mapeamento e Otimização\nde Processos', 'Gestão Financeira\ne Operacional'],
            [8, 9, 8, 9, 8, 7],
            {
            background: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                 'rgba(153, 102, 255, 0.8)',
                'rgba(173, 216, 230, 0.8)',
                  'rgba(240, 128, 128, 0.8)',
                'rgba(210, 180, 140, 0.8)'
            ],
             border: [
                   'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                     'rgba(153, 102, 255, 1)',
                   'rgba(173, 216, 230, 1)',
                      'rgba(240, 128, 128, 1)',
                      'rgba(210, 180, 140, 1)'
                ],
            },
            'technicalSkillsChart'
    );
     const personalSkillsChart = createBarChart(
        document.getElementById('personalSkillsChart').getContext('2d'),
         ['Comunicação Eficaz', 'Liderança', 'Resolução de Problemas', 'Trabalho em Equipe', 'Gestão de Tempo', 'Orientação ao Cliente'],
             [9, 7, 9, 9, 8, 9],
         {
            background: [
                   'rgba(255, 99, 132, 0.8)',
                   'rgba(255, 206, 86, 0.8)',
                   'rgba(255, 159, 64, 0.8)',
                   'rgba(173, 216, 230, 0.8)',
                   'rgba(240, 128, 128, 0.8)',
                    'rgba(210, 180, 140, 0.8)'
            ],
            border: [
                   'rgba(255, 99, 135, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)',
                     'rgba(173, 216, 230, 1)',
                    'rgba(240, 128, 128, 1)',
                      'rgba(210, 180, 140, 1)'
            ]
        },
        'personalSkillsChart'
    );
    
    // Dados e criação dos gráficos radar para Grupo CVLB
        createRadarChart(
          document.getElementById('radarChart1T').getContext('2d'),
         ['Análise de\nDados','Desenvolvimento\nde Dashboards', 'Garantia de\nQualidade', 'Criação de\nRelatórios', 'Resolução de\nProblemas','Apresentação\nde Dados'],
           [9,9, 8, 8, 8,7],
         {
              background:  'rgba(54, 162, 235, 0.2)',
               border:'rgba(54, 162, 235, 1)'
          },
          'radarChart1T'
         );
    
    
         createRadarChart(
          document.getElementById('radarChart1P').getContext('2d'),
        ['Apoio à Tomada\nde Decisões', 'Pensamento\nCrítico', 'Foco nos\nIndicadores\nOperacionais', 'Trabalho em\nEquipe', 'Gestão de\nTempo', 'Comunicação\nde Resultados'],
           [9, 8, 8, 7, 7, 7],
         {
             background: 'rgba(255, 99, 132, 0.2)',
               border: 'rgba(255, 99, 132, 1)'
          },
             'radarChart1P'
        );
    
      // Dados e criação dos gráficos radar para iFood
         createRadarChart(
            document.getElementById('radarChart2T').getContext('2d'),
         ['Análise de\nDados', 'Mapeamento\nde Processos', 'Relatórios e\nApresentações', 'Tecnologia da\nInformação', 'Pensamento\nAnalítico','Visualização\nde Dados'],
             [9, 9, 8, 8, 8, 7],
             {
              background:  'rgba(153, 102, 255, 0.2)',
               border:'rgba(153, 102, 255, 1)'
           },
            'radarChart2T'
        );
    
        createRadarChart(
           document.getElementById('radarChart2P').getContext('2d'),
           ['Comunicação Clara\ncom Stakeholders', 'Trabalho\nCross-Functional', 'Foco na\nExperiência\ndo Cliente', 'Resolução de\nProblemas', 'Colaboração','Adaptabilidade'],
           [9, 8, 8, 8, 7, 7],
             {
              background:  'rgba(255, 206, 86, 0.2)',
               border:'rgba(255, 206, 86, 1)'
           },
            'radarChart2P'
        );
        
          // Dados e criação dos gráficos radar para H&M Sushi
        createRadarChart(
          document.getElementById('radarChart3T').getContext('2d'),
         ['Gestão\nFinanceira', 'Gestão de\nEstoques', 'Análise de\nIndicadores', 'Planejamento\nOperacional', 'Gestão de\nEquipes','Desenvolvimento\nde Estratégias'],
               [9, 8, 8, 8, 8, 7],
               {
                    background: 'rgba(75, 192, 192, 0.2)',
                    border: 'rgba(75, 192, 192, 1)'
               },
            'radarChart3T'
        );
      createRadarChart(
          document.getElementById('radarChart3P').getContext('2d'),
            ['Liderança', 'Orientação\nao Cliente', 'Comunicação\ncom a Equipe', 'Resolução de\nConflitos', 'Planejamento\nEstratégico','Gestão do\nTempo'],
            [9, 8, 8, 8, 8, 7],
                {
                background:  'rgba(240, 128, 128, 0.2)',
                border: 'rgba(240, 128, 128, 1)'
                },
            'radarChart3P'
        );
});

// Botão Voltar ao Topo
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});